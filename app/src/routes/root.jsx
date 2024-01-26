import { Form, Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
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
          {/* 페이지 링크 추가 */}
          <ul>
            <li>
              <Link to={`infinite-scroll`}>무한스크롤</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
