import { useParams } from 'react-router-dom';
import './ArticleDetail.css';

export default function ArticleDetail({ items }) {
  // console.log('ArticleDetail', items);

  const { id } = useParams();
  // console.log('id:', id, typeof id);

  const thisItem = items.find((item) => item.fields.id === parseInt(id));

  // console.log('items.length: ', items.length, 'thisItem: ', thisItem);

  const {
    artist,
    country,
    birth,
    death,
    artOfDeath,
    greatestHits,
    bandName,
    album,
    biggestTour,
    distinguishingFeature,
    picture,
    shortBio,
  } = {
    artist: thisItem.fields.artist,
    country: thisItem.fields.country,
    birth: thisItem.fields.birth,
    death: thisItem.fields.death,
    artOfDeath: thisItem.fields.artOfDeath,
    greatestHits: thisItem.fields.greatestHits.content[0].content,
    bandName: thisItem.fields.bandName,
    album: thisItem.fields.album,
    biggestTour: thisItem.fields.biggestTour,
    distinguishingFeature: thisItem.fields.distinguishingFeature,
    picture: thisItem.fields.picture.fields.file.url,
    shortBio: thisItem.fields.shortBio.content[0].content[0].value,
  };

  // console.log(greatestHits);

  let key = 1;

  return (
    <>
      <section className="ArticleDetail-artist-heading">
        <figure className="ArticleDetail-figure">
          <figcaption className="ArticleDetail-figcaption">
            <h1 className="ArticleDetail-blog-title">{artist}</h1>
          </figcaption>
          <img
            className="ArticleDetail-picture"
            src={`https:${picture}`}
            alt={artist}
          />
        </figure>
      </section>
      <section className="ArticleDetail-main">
        <aside className="ArticleDetail-sidebar-container">
          <div className="ArticleDetail-sidebar-heading">
            <h3>Artist Information</h3>
          </div>
          <div className="ArticleDetail-sidebar-artist-info">
            <ul className="ArticleDetail-list-artist-info">
              {bandName ? <li>Band name: {bandName}</li> : ''}
              {country ? <li>Country: {country}</li> : ''}
              {birth ? (
                <li>Born: {new Date(birth).toLocaleDateString('en-US')}</li>
              ) : (
                ''
              )}
              {death ? (
                <li>Died: {new Date(death).toLocaleDateString('en-US')}</li>
              ) : (
                ''
              )}
              {artOfDeath ? <li>Cause of death: {artOfDeath}</li> : ''}
              {greatestHits.length > 0 ? (
                <li>
                  Greatest Hits:
                  <ol className="ArticleDetail-list-greatestHits">
                    {greatestHits.map((el) => {
                      const title = el.content[0].content[0].value;
                      const description = el.content[0].content[1].value;
                      return <li key={key++}>{title + description}</li>;
                    })}
                  </ol>
                </li>
              ) : (
                ''
              )}
              {album ? <li>Most Sold Album: {album}</li> : ''}
              {biggestTour ? <li>Biggest Tour: {biggestTour}</li> : ''}
              {distinguishingFeature ? (
                <li>Distinguishing feature: {distinguishingFeature}</li>
              ) : (
                ''
              )}
            </ul>
          </div>
        </aside>
        <div className="ArticleDetail-content-container">
          <article className="ArticleDetail-artist-bio">
            <h3>Artist Bio</h3>
            <p>{shortBio}</p>
          </article>
        </div>
      </section>
    </>
  );
}
