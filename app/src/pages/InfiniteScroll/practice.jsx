import { useCallback, useRef, useState } from "react";

const InfiniteScroll = () => {
    // 현재 화면에 표시될 아이템들의 리스트
    const [listItems, setListItems] = useState(
        Array.from(Array(30).keys(), (n) => n + 1)
    );
    // 데이터를 불러오는 중인지 아닌지를 나타내는 상태
    const [loading, setLoading] = useState(false);
    // 불러올 데이터가 있는지 없는지 체크하는 상태
    const [hasMore, setHasMore] = useState(true);
    // Intersection Observer의 인스턴스를 저장
    const observer = useRef();

    const lastItemRef = useCallback(
        (node) => {
            // loading 중일때는 함수 동작 안하게 처리
            if (loading) return;
            // ref에 값이 있으면 observer current를 disconnect해라.
            // 안끊어주면 관찰하고 있는 값이 달라서 동작이 안되거나 무한 스크롤 됨.
            if (observer.current) observer.current.disconnect();
            // 현재 상태가 마지막인지 아닌지 판단한 값을 ref에 저장해주는 함수(확인용)
            observer.current = new IntersectionObserver((entries) => {
                // isIntersecting이 마지막 요소이면 true, 아니면 false
                if (entries[0].isIntersecting && hasMore) {
                    setLoading(true);
                    setTimeout(() => {
                        // 데이터 불러오는 로직
                        // Array.keys는 배열 값을 index 번호로 초기화해줌
                        // 만약에 keys가 없으면 undefined로 들어감
                        const newListItems = Array.from(
                            Array(20).keys(),
                            (n) => n + listItems.length + 1
                        );
                        // obj로 감싸면 값을 return문으로 꼭 반환해줘야 함(콜백함수)
                        // 그게 싫으면 값을 넣고자하는 자료형으로 감싸주기
                        setListItems((prev) => [...prev, ...newListItems]);

                        // 로딩이 완료됐다는 걸 알리기
                        setLoading(false);

                        // 불러올 데이터가 없다면 hasMore를 false로 설정
                        if (listItems > 100) {
                            setHasMore(false);
                        }
                    }, 2000);
                }
            });
            // 브라우저에서 새로운 node가 있는지 없는지 확인
            if (node) {
                observer.current.observe(node);
            }
        },
        [loading, hasMore, listItems.length]
    );

    return (
        <div>
            <p>무한스크롤</p>
            <ul>
                {listItems.map((item, index) => (
                    <li
                        key={item}
                        ref={
                            index === listItems.length - 1 ? lastItemRef : null
                        }
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
        </div>
    );
};
export default InfiniteScroll;
