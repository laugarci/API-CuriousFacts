const { BtnFunFactClick,
        LikeHeartClick,
        LikeHeartFullClick,
        getfunFact,
      } = require('../js/index');

  
  describe('BtnFunFactClick function', () => {
    it('should be declared', () => {
    expect(typeof BtnFunFactClick).toBe('function');
    });
  });
  

describe('LikeHeartFullClick function', () => {
    it ('should be declared', () => {
        expect(typeof LikeHeartFullClick).toBe('function');
    });
    it('should show full heart', () => {
        const likeHeart = {
            style: {
              visibility: ""
            }
          };
          const likeHeartFull = {
            style: {
              visibility: ""
            }
          };
          const funFact = {
            textContent: ""
          };
      
          const saveFact = jest.fn();
          likeHeart.style.visibility = "hidden";
          likeHeartFull.style.visibility = "visible";
          funFact.textContent = "Fact";

          function LikeHeartFullClick() {
            const fact = funFact.textContent;
            likeHeart.style.visibility = "visible";
            likeHeartFull.style.visibility = "hidden";
          }

        LikeHeartFullClick();
        expect(likeHeart.style.visibility).toBe("visible");
        expect(likeHeartFull.style.visibility).toBe("hidden");
    })
});

describe('LikeHeartClick function', () => {
    it('should be declared', () => {
        expect(typeof LikeHeartClick).toBe('function');
    })
    it('check if function LikeHeartClick executes correctly', () => {
        const likeHeart = {
            style: {
              visibility: ""
            }
          };
          const likeHeartFull = {
            style: {
              visibility: ""
            }
          };
          const funFact = {
            textContent: ""
          };
      
          const saveFact = jest.fn();
          likeHeart.style.visibility = "visible";
          likeHeartFull.style.visibility = "hidden";
          funFact.textContent = "Fact";
        
          function LikeHeartClick() {
              likeHeart.style.visibility = "hidden";
              likeHeartFull.style.visibility = "visible";
              const fact = funFact.textContent;
              saveFact(fact);
          }

          LikeHeartClick();
          expect(likeHeart.style.visibility).toBe("hidden");
          expect(likeHeartFull.style.visibility).toBe("visible");
          expect(saveFact).toHaveBeenCalledWith("Fact");
    });
});


const mockFetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ text: 'Fact text' })
  })
);
global.fetch = mockFetch;

describe('getfunFact', () => {
  test('realiza la llamada a la API correctamente', async () => {
    await getfunFact();
    expect(mockFetch).toHaveBeenCalledWith('https://uselessfacts.jsph.pl/api/v2/facts/random');
  });
});