import './AllBlogs.css';
import OneBlog from './OneBlog';

export default function AllBlogs() {
  return (
    <div className="AllBlogs">
      <OneBlog random="1" />
      <OneBlog random="2" />
      <OneBlog random="3" />
    </div>
  );
}
