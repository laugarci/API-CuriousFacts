import { fireEvent } from '@testing-library/dom';
import { getfunFact } from '../js/index';

const btnfunFact = document.createElement('button');
const audio = document.createElement('audio');
const likeHeart = document.createElement('div');
const likeHeartFull = document.createElement('div');

describe('btnfunFact event listener', () => {
  beforeEach(() => {
    audio.pause = jest.fn();
    getfunFact = jest.fn();
    likeHeart.style.visibility = 'hidden';
    likeHeartFull.style.visibility = 'visible';
  });

  it('pauses the audio', () => {
    fireEvent.click(btnfunFact);
    expect(audio.pause).toHaveBeenCalled();
  });

  it('calls getfunFact function', () => {
    fireEvent.click(btnfunFact);
    expect(getfunFact).toHaveBeenCalled();
  });

  it('sets the visibility of likeHeart and likeHeartFull', () => {
    fireEvent.click(btnfunFact);
    expect(likeHeart.style.visibility).toBe('visible');
    expect(likeHeartFull.style.visibility).toBe('hidden');
  });
});
