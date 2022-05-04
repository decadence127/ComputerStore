/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const taskFooterStyles = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 10px 0px 20px',
});

const taskExecutorsWrapperStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const descriptionButtonWrapperStyles = css({
  display: 'flex',
  alignItems: 'center',
});

const descriptionButtonStyles = css({
  fontSize: '15px',
  margin: '5px 0px 10px 0px',
  fontStyle: 'italic',
  color: '#808080',
  padding: '0px 5px',
  textTransform: 'none',
});

const styles = {
  descriptionButtonWrapperStyles,
  descriptionButtonStyles,
  taskFooterStyles,
  taskExecutorsWrapperStyles,
};

export default styles;
