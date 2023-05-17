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
                artist={item.artist}
                id={item.id}
                picture={item.picture}
                shortBio={item.short_bio}
                key={item.id}
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
