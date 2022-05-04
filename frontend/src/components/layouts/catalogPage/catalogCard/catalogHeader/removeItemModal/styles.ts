/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const modalStyles = css({
  position: 'absolute',
  borderTop: '10px solid rgba(0, 77, 215, 1)',
  padding: '3rem',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '48rem',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const messageWrapperStyle = css({
  '& p': {
    margin: '5px 0px',
    wordBreak: 'break-all',
  },
  fontWeight: 'bold',
  fontSize: '20px',
  margin: '20px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#000',
  fontStyle: 'initial',
});

const buttonsWrapperStyle = css({
  fontWeight: 'bold',
  fontSize: '20px',
  margin: '20px 0px',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
});

const buttonStyle = css({
  width: '100px',
  margin: '0px 50px',
});

const closeButtonStyle = css({
  width: '100px',
  margin: '0px 50px',
  background: '#F2F2F2',
  color: 'black',
});

const styles = {
  modalStyles,
  messageWrapperStyle,
  buttonsWrapperStyle,
  buttonStyle,
  closeButtonStyle,
};

export default styles;
