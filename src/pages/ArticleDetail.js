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
    shortBio: thisItem.fields.shortBio.content,
  };

  // console.log('Short bio:', shortBio);

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
            <dl className="ArticleDetail-list-artist-info">
              {bandName ? (
                <>
                  <dt>Band name:</dt>
                  <dd>{bandName}</dd>
                </>
              ) : (
                ''
              )}
              {country ? (
                <>
                  <dt>Country:</dt>
                  <dd>{country}</dd>
                </>
              ) : (
                ''
              )}
              {birth ? (
                <>
                  <dt>Born:</dt>
                  <dd>{new Date(birth).toLocaleDateString('en-US')}</dd>
                </>
              ) : (
                ''
              )}
              {death ? (
                <>
                  <dt>Died:</dt>
                  <dd>{new Date(death).toLocaleDateString('en-US')}</dd>
                </>
              ) : (
                ''
              )}
              {artOfDeath ? (
                <>
                  <dt>Cause of death:</dt>
                  <dd>{artOfDeath}</dd>
                </>
              ) : (
                ''
              )}
              {greatestHits.length > 0 ? (
                <>
                  <dt>Greatest Hits:</dt>
                  <dd>
                    <ol className="ArticleDetail-list-greatestHits">
                      {greatestHits.map((el) => {
                        const title = el.content[0].content[0].value;
                        const description = el.content[0].content[1].value;
                        return (
                          <li key={key++}>
                            <span className="ArticleDetail-greatestHits-title">
                              {title}
                            </span>
                            {description}
                          </li>
                        );
                      })}
                    </ol>
                  </dd>
                </>
              ) : (
                ''
              )}
              {album ? (
                <>
                  <dt>Most Sold Album:</dt>
                  <dd>{album}</dd>
                </>
              ) : (
                ''
              )}
              {biggestTour ? (
                <>
                  <dt>Biggest Tour:</dt>
                  <dd>{biggestTour}</dd>
                </>
              ) : (
                ''
              )}
              {distinguishingFeature ? (
                <>
                  <dt>Distinguishing feature:</dt>
                  <dd>{distinguishingFeature}</dd>
                </>
              ) : (
                ''
              )}
            </dl>
          </div>
        </aside>
        <div className="ArticleDetail-content-container">
          <article className="ArticleDetail-artist-bio">
            <h3>Artist Bio</h3>
            {shortBio.length > 0 ? (
              shortBio.map((el) => {
                return <p key={key++}>{el.content[0].value}</p>;
              })
            ) : (
              <h1>NO BIO FOUND</h1>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
