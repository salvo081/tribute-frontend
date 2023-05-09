import './AllBoxes.css';
import OneBox from './OneBox';

export default function AllBoxes({ items }) {
  // console.log('AllBoxes items: ', items);

  return (
    <div className="all-boxes-wrapper">
      <div className="AllBoxes">
        {items.length > 0 ? (
          items.slice(0, 3).map((item) => {
            return (
              <OneBox
                artist={item.fields.artist}
                id={item.fields.id}
                picture={item.fields.picture.fields.file.url}
                shortBio={item.fields.shortBio.content[0].content[0].value}
                key={item.fields.id}
              />
            );
          })
        ) : (
          <h1>NO ITEMS FOUND</h1>
        )}
        {/* <OneBox /> */}
      </div>
    </div>
  );
}
