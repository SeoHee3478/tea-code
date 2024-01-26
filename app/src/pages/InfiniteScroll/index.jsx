import { useCallback, useRef, useState } from "react";

const InfiniteScroll = () => {
  // 현재 화면에 표시될 아이템들의 리스트
  const [listItems, setListItems] = useState(
    Array.from(Array(30).keys(), (n) => n + 1)
  );
  // 데이터를 불러오는 중인지 아닌지를 나타내는 상태
  const [loading, setLoading] = useState(false);
  // 데이터를 불러오는 중인지 아닌지를 나타내는 상태
  const [hasMore, setHasMore] = useState(true);
  // Intersection Observer의 인스턴스를 저장
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        // entries는 모든 감시 대상 요소의 교차 상태 정보를 담은 배열
        if (entries[0].isIntersecting && hasMore) {
          // 요소가 마지막 요소이며 더 불러올 값이 있을 때
          setLoading(true);
          setTimeout(() => {
            // 다음 페이지의 데이터를 불러온 후, setListItems를 통해 기존 리스트에 추가
            const newListItems = Array.from(
              Array(20).keys(),
              (n) => n + listItems.length + 1
            );
            setListItems((prevListItems) => [
              ...prevListItems,
              ...newListItems,
            ]);

            // 로딩이 완료되면 setLoading을 false로 설정
            setLoading(false);

            // 만약 더이상 불러올 데이터가 없다면, setHasMore를 false로 설정
            // 이 예시에서는 100개 이상의 아이템이 로딩되면 더 이상 데이터를 불러오지 않습니다.
            if (listItems.length >= 100) {
              setHasMore(false);
            }
          }, 2000); // 2초 후에 새로운 데이터가 로드된 것처럼 처리
        }
      });
      if (node) observer.current.observe(node);
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
            ref={index === listItems.length - 1 ? lastItemRef : null}
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
