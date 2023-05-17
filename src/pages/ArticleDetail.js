import { useParams } from 'react-router-dom';
import './ArticleDetail.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ArticleDetail({ items }) {
  // console.log('ArticleDetail', items);

  const { id } = useParams();
  // console.log('id:', id, typeof id);

  const thisItem = items.find((item) => item.id === parseInt(id));

  // console.log('items.length: ', items.length, 'thisItem: ', thisItem);

  // const [singleArtist, setSingleArtist] = useState({}); // Rename state variable

  // useEffect(() => {
  //   console.log('USE EFFECT');
  //   async function fetchSingleArtist() {
  //     // Define asynchronous function
  //     try {
  //       console.log('id:', id, typeof id);
  //       const response = await axios.get(`http://localhost:8080/artists/${id}`); // Make GET request to localhost:8080/artists
  //       setSingleArtist(response.data); // Set state with response data
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchSingleArtist(); // Call asynchronous function
  // }, [id]);

  // async function fetchSingleArtist() {
  //   console.log('FETCH SINGLE ARTIST');
  //   // Define asynchronous function
  //   try {
  //     console.log('id:', id, typeof id);
  //     const response = await axios.get(`http://localhost:8080/artists/${id}`); // Make GET request to localhost:8080/artists
  //     setSingleArtist(response.data); // Set state with response data
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // fetchSingleArtist(); // Call asynchronous function

  // console.log('Single Artist:', singleArtist);

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
    artist: thisItem.artist,
    country: thisItem.country,
    birth: thisItem.born,
    death: thisItem.died,
    artOfDeath: thisItem.cause_of_death,
    greatestHits: thisItem.greatest_hits.split('\\n'),
    bandName: thisItem.band_name,
    album: thisItem.most_sold_album,
    biggestTour: thisItem.biggest_tour,
    distinguishingFeature: thisItem.distinguishing_feature,
    picture: thisItem.picture,
    shortBio: thisItem.short_bio.split('\\n'),
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
                        const title = el.slice(0, el.indexOf('-'));
                        const description = el.slice(el.indexOf('-'));
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
                return <p key={key++}>{el}</p>;
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
