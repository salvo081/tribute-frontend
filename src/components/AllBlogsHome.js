import './AllBlogsHome.css';
import OneBlog from './OneBlog';

export default function AllBlogsHome({ items }) {
  return (
    <div className="AllBlogsHome">
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
