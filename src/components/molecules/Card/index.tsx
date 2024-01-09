import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';

import { PAGES } from 'src/constants/pages';
import { Locales } from 'src/i18n';
import { Msg } from 'src/i18n/Msg';
import { Link } from 'src/navigation/Link';
import { Game } from 'src/types';
import { getFormattedDate } from 'src/utils/dates';

import styles from 'src/components/molecules/Card/styles.module.css';

type Props = {
  game: Game;
  locale?: Locales;
};

export const Card: React.FC<Props> = ({ game, locale = 'kz' }) => {
  const preview = game.fields.preview[0].url;
  const logo = game.fields.logo[0].url;

  return (
    <div className={styles.card}>
      <div
        className={styles.preview}
        style={{
          backgroundImage: `url(${preview})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      />
      <div
        className={styles.logo}
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Link
          url={{
            scheme: PAGES.GAME,
            params: { id: game.fields.url },
          }}
        >
          <div className={styles.link}>{game.fields.title}</div>
        </Link>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          {game.fields[`shortDesc_${locale}`]}
        </p>
        <div className={styles.slider}>
          <CarouselProvider
            visibleSlides={3}
            totalSlides={game.fields.images.length}
            infinite
            naturalSlideWidth={313}
            naturalSlideHeight={176}
          >
            <Slider>
              {game.fields.images.map((el, index) => (
                <Slide index={index} key={el.id}>
                  <div
                    className={styles.slideWrapper}
                    style={{
                      backgroundImage: `url(${el.url})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  />
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.label}>
              <Msg id="components.molecules.Card.platform" />
            </p>
            <p className={styles.text}>{game.fields.platforms}</p>
          </div>

          <div className={styles.dateWrapper}>
            <div className={styles.textWrapper}>
              <p className={styles.label}>
                <Msg id="components.molecules.Card.date" />
              </p>
              <p className={styles.text}>
                {getFormattedDate(game.createdTime)}
              </p>
            </div>

            <div className={styles.textWrapper}>
              <p className={styles.label}>
                <Msg id="components.molecules.Card.views" />
              </p>
              <p className={styles.text}>{game.fields.views}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
