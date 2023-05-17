import './AllBlogs.css';
import OneBlog from './OneBlog';

export default function AllBlogs({ items }) {
  return (
    <div className="AllBlogs">
      {items.length > 0 ? (
        items.map((item) => {
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
