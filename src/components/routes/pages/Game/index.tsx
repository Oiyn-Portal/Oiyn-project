import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { actions } from 'src/actions';
import { Button } from 'src/components/atoms/Button';
import { Arrow } from 'src/components/atoms/icons/Arrow';
import { Page } from 'src/components/organisms/Page';
import { Msg } from 'src/i18n/Msg';
import { ReduxState } from 'src/reducers';
import { getFormattedDate } from 'src/utils/dates';

import styles from 'src/components/routes/pages/Game/styles.module.css';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id = '' } = useParams();

  const { isLoader, game, locale } = useSelector(
    ({ games, user }: ReduxState) => ({
      isLoader: games.isFetching,
      game: games.currentGame,
      locale: user.geoInfo.locale,
    }), // No rerender
    (left, right) => JSON.stringify(left) === JSON.stringify(right)
  );

  useEffect(() => {
    dispatch(
      actions.api.games.getGames.started({
        view: 'Grid view',
        filterByFormula: `{url} = "${id}"`,
        maxRecords: 1,
        extra: {
          field: 'currentGame',
        },
      })
    );
  }, []);

  if (isLoader) {
    return (
      <Page template="withFooter">
        <div className={styles.empty}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
        </div>
      </Page>
    );
  }

  if (!game) {
    return (
      <Page template="withFooter">
        <div className={styles.empty}>
          <Msg id="components.routes.pages.Game.noResults" />
        </div>
      </Page>
    );
  }

  const onBack = () => {
    navigate(-1);
  };

  const preview = game.fields.preview[0].url;
  const logo = game.fields.logo[0].url;

  return (
    <Page template="main">
      <div className={styles.card}>
        <button onClick={onBack} className={styles.back}>
          <Arrow />

          <span>
            <Msg id="base.buttons.back" />
          </span>
        </button>
        <div
          className={styles.preview}
          style={{
            backgroundImage: `url(${preview})`,
            backgroundSize: 'auto 100%',
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
          <div className={styles.link}>{game.fields.title}</div>
        </div>
        <div className={styles.content}>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: game.fields[`longDesc_${locale}`],
            }}
          />

          <div className={styles.wrapperButton}>
            <Button
              onClick={() =>
                dispatch(
                  actions.ui.modal.show({
                    name: 'GameModal',
                    data: {
                      mode: 'desc',
                      pathToGame: game.fields.pathToGame || '',
                    },
                  })
                )
              }
              text={{ id: 'components.routes.pages.Game.button' }}
            />
          </div>

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
                <Msg id="components.routes.pages.Game.platform" />
              </p>
              <p className={styles.text}>{game.fields.platforms}</p>
            </div>

            <div className={styles.dateWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.label}>
                  <Msg id="components.routes.pages.Game.date" />
                </p>
                <p className={styles.text}>
                  {getFormattedDate(game.createdTime)}
                </p>
              </div>

              <div className={styles.textWrapper}>
                <p className={styles.label}>
                  <Msg id="components.routes.pages.Game.views" />
                </p>
                <p className={styles.text}>{game.fields.views}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Game;
