/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputTitleWrapperStyles = css({
  width: '89.8%',
  height: '25px',
  marginLeft: '18px',
});

const inputTitleStyles = css({
  '& input': {
    padding: '3px 10px',
    width: '100%',
  },
  width: '100%',
  display: 'flex',
  flexFlow: 'column wrap',
  height: '25px',
});

const titleWrapperStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: '20px',
  justifyContent: 'space-between',
  padding: '9px 15px 3px 8px',
  height: '25px',
});

const removeButtonStyles = css({
  '& :hover': {
    color: '#921313',
  },
  color: '#c71818',
  fontSize: '25px',
  marginLeft: '18px',
});

const creatorBoxStyles = css({ display: 'flex', alignItems: 'center', '& > *': { margin: '8px' } });

const titleStyles = css({
  wordBreak: 'break-all',
  cursor: 'pointer',
});

const styles = {
  inputTitleWrapperStyles,
  titleWrapperStyles,
  removeButtonStyles,
  titleStyles,
  creatorBoxStyles,
  inputTitleStyles,
};

export default styles;
