import { Form, Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { getContacts, createContact } from "../contacts";

export async function action() {
  const contact = await createContact();
  return { contact };
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

//0번째 index에 추가해주세요.
const RouteList = [
  { link: "intro", title: "사용자 설명서 (Intro.js)" },
  { link: "throttle", title: "쓰로틀" },
  { link: "fullpage-scroll", title: "풀페이지스크롤" },
  { link: "image-lazy-loading", title: "이미지 레이지 로딩" },
  { link: "debounce", title: "디바운스" },
  { link: "darkmode", title: "다크모드" },
  { link: "scroll-to-bottom", title: "스크롤 바닥으로 내리기" },
  { link: "pagination", title: "페이지네이션" },
  { link: "sort", title: "정렬" },
  { link: "infinite-scroll", title: "무한스크롤" },
];

export default function Root() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && (
        <Navigate to={`/${RouteList[0].link}`} replace />
      )}
      <div id="sidebar">
        <h1>List</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search list"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          <ul>
            {RouteList.map((route, i) => (
              <li key={i}>
                <Link to={`${route.link}`}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
