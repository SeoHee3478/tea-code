import { useCallback, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(30).keys(), (n) => n + 1)
  );
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoading(true);
          // 새로운 데이터 로딩을 여기에 추가하시면 됩니다.
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
