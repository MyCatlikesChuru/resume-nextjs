import { PropsWithChildren, CSSProperties } from 'react';
import { IRow } from './IRow';
import { HrefTargetBlank } from '.';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description, descIndex) => {
            return (
              <>
                <Description description={description} key={descIndex.toString()} />
                {description.descriptions ? (
                  <DescriptionRecursion
                    descriptions={description.descriptions}
                    key={descIndex.toString()}
                  />
                ) : (
                  ''
                )}
              </>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description description={description} key={index.toString()} />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
                key={index.toString()}
              />
            ) : (
              ''
            )}
          </>
        );
      })}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  // 기존
  // const { content, href, postImage, postHref, weight } = description;
  // 변경
  const { content, href, postImage, postVideo, postHref, weight } = description;

  /* 기존
  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <br /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return <li style={getFontWeight(weight)}>{content}</li>;
  })();
  */

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <br /> <img src={postImage} alt={postImage} />
        </li>
      );
    }

    // 추가: MP4 동영상 출력
    if (postVideo) {
      return (
        <li style={getFontWeight(weight)}>
          {content}
          <video
            src={postVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              marginTop: '10px',
              borderRadius: '8px',
            }}
          >
            브라우저가 동영상 재생을 지원하지 않습니다.
          </video>
        </li>
      );
    }

    return <li style={getFontWeight(weight)}>{content}</li>;
  })();

  return component;
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Noto Sans KR Weights: 300, 400, 500, 700
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  LIGHT: 300,
  REGULAR: 300,
  MEDIUM: 500,
  // BOLD: 700,
  BOLD: 500,
};
