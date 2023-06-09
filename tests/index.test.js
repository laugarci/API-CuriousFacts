const { handleBtnFunFactClick, handleLikeHeartClick, handleLikeHeartFullClick } = require('../js/index');

  
  describe('handleBtnFunFactClick function', () => {
    it('should be declared', () => {
    expect(typeof handleBtnFunFactClick).toBe('function');
    });
  });
  

describe('handleLikeHeartFullClick function', () => {
    it ('should be declared', () => {
        expect(typeof handleLikeHeartFullClick).toBe('function');
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

          function handleLikeHeartFullClick() {
            const fact = funFact.textContent;
            likeHeart.style.visibility = "visible";
            likeHeartFull.style.visibility = "hidden";
          }

        handleLikeHeartFullClick();
        expect(likeHeart.style.visibility).toBe("visible");
        expect(likeHeartFull.style.visibility).toBe("hidden");
    })
});

describe('handleLikeHeartClick function', () => {
    it('should be declared', () => {
        expect(typeof handleLikeHeartClick).toBe('function');
    })
    it('check if function handleLikeHeartClick executes correctly', () => {
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
        
          function handleLikeHeartClick() {
              likeHeart.style.visibility = "hidden";
              likeHeartFull.style.visibility = "visible";
              const fact = funFact.textContent;
              saveFact(fact);
          }
          handleLikeHeartClick();
          expect(likeHeart.style.visibility).toBe("hidden");
          expect(likeHeartFull.style.visibility).toBe("visible");
          expect(saveFact).toHaveBeenCalledWith("Fact");
    });
});