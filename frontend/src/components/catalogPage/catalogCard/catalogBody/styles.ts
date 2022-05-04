/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const descriptionWrapperStyles = css({
  padding: '10px 0px 10px 20px',
  position: 'relative',
  margin: '10px 0px 0px 16px',
  border: '1px solid #80808066',
  borderRadius: '10px',
  width: '800px',
});

const fullDescriptionTextAreaStyles = css({
  '& p': {
    overflowWrap: 'break-word',
  },
  paddingRight: '20px',
  overflow: 'hidden',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '20px',
});

const descriptionTextAreaStyles = css({
  '& p': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  overflow: 'hidden',
  cursor: 'pointer',
  height: '20px',
});

const styles = {
  descriptionWrapperStyles,
  descriptionTextAreaStyles,
  fullDescriptionTextAreaStyles,
};

export default styles;
