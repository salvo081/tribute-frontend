import './AllBlogsHome.css';
import OneBlog from './OneBlog';

export default function AllBlogsHome({ items }) {
  return (
    <div className="AllBlogsHome">
      {items.length > 0 ? (
        items.slice(0, 6).map((item) => {
          return (
            <OneBlog
              artist={item.artist}
              id={item.id}
              picture={item.picture}
              shortBio={item.short_bio}
              key={item.id}
            />
          );
        })
      ) : (
        <h1>404 NOT FOUND</h1>
      )}
    </div>
  );
}
