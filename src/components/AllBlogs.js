import './AllBlogs.css';
import OneBlog from './OneBlog';

export default function AllBlogs({ items }) {
  return (
    <div className="AllBlogs">
      {items.length > 0 ? (
        items.slice(0, 6).map((item) => {
          return (
            <OneBlog
              artist={item.fields.artist}
              id={item.fields.id}
              picture={item.fields.picture.fields.file.url}
              shortBio={item.fields.shortBio.content[0].content[0].value}
              key={item.fields.id}
            />
          );
        })
      ) : (
        <h1>404 NOT FOUND</h1>
      )}
    </div>
  );
}
