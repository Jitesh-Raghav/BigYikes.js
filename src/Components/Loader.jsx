import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box box-1">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
        <div className="box box-2">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
        <div className="box box-3">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
        <div className="box box-4">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
      </div>
      <p className="loader-text">Let me cook</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  background-color: #fff; /* Optional background color for contrast */

  .loader {
    scale: 3;
    height: 50px;
    width: 40px;
  }

  .box {
    position: relative;
    opacity: 0;
    left: 10px;
  }

  .side-left {
    position: absolute;
    background-color: #ff69b4; /* Pink color */
    width: 19px;
    height: 5px;
    transform: skew(0deg, -25deg);
    top: 14px;
    left: 10px;
  }

  .side-right {
    position: absolute;
    background-color: #ff85c9; /* Lighter pink for variation */
    width: 19px;
    height: 5px;
    transform: skew(0deg, 25deg);
    top: 14px;
    left: -9px;
  }

  .side-top {
    position: absolute;
    background-color: #ffc1e3; /* Lightest pink for contrast */
    width: 20px;
    height: 20px;
    rotate: 45deg;
    transform: skew(-20deg, -20deg);
  }

  .box-1 {
    animation: from-left 4s infinite;
  }

  .box-2 {
    animation: from-right 4s infinite;
    animation-delay: 1s;
  }

  .box-3 {
    animation: from-left 4s infinite;
    animation-delay: 2s;
  }

  .box-4 {
    animation: from-right 4s infinite;
    animation-delay: 3s;
  }

  @keyframes from-left {
    0% {
      z-index: 20;
      opacity: 0;
      translate: -20px -6px;
    }

    20% {
      z-index: 10;
      opacity: 1;
      translate: 0px 0px;
    }

    40% {
      z-index: 9;
      translate: 0px 4px;
    }

    60% {
      z-index: 8;
      translate: 0px 8px;
    }

    80% {
      z-index: 7;
      opacity: 1;
      translate: 0px 12px;
    }

    100% {
      z-index: 5;
      translate: 0px 30px;
      opacity: 0;
    }
  }

  @keyframes from-right {
    0% {
      z-index: 20;
      opacity: 0;
      translate: 20px -6px;
    }

    20% {
      z-index: 10;
      opacity: 1;
      translate: 0px 0px;
    }

    40% {
      z-index: 9;
      translate: 0px 4px;
    }

    60% {
      z-index: 8;
      translate: 0px 8px;
    }

    80% {
      z-index: 7;
      opacity: 1;
      translate: 0px 12px;
    }

    100% {
      z-index: 5;
      translate: 0px 30px;
      opacity: 0;
    }
  }

  .loader-text {
    font-size: 1.25rem; /* Equivalent to 'xl' in Tailwind CSS */
    color: #4a5568; /* gray-700 */
    margin-top: 20px;
    text-align: center;
  }
`;

export default Loader;







// import React from 'react';
// import styled from 'styled-components';

// const Loader = () => {
//   return (
//     <StyledWrapper>
//       <div className="loader">
//         <div className="loader-square" />
//         <div className="loader-square" />
//         <div className="loader-square" />
//         <div className="loader-square" />
//         <div className="loader-square" />
//         <div className="loader-square" />
//         <div className="loader-square" />
//       </div>
//       <p className="loader-text">Let me cook</p>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh; /* Full viewport height */
//   background-color: #fff; /* Optional background for contrast */

//   @keyframes square-animation {
//     0% {
//       left: 0;
//       top: 0;
//     }
//     10.5% {
//       left: 0;
//       top: 0;
//     }
//     12.5% {
//       left: 32px;
//       top: 0;
//     }
//     23% {
//       left: 32px;
//       top: 0;
//     }
//     25% {
//       left: 64px;
//       top: 0;
//     }
//     35.5% {
//       left: 64px;
//       top: 0;
//     }
//     37.5% {
//       left: 64px;
//       top: 32px;
//     }
//     48% {
//       left: 64px;
//       top: 32px;
//     }
//     50% {
//       left: 32px;
//       top: 32px;
//     }
//     60.5% {
//       left: 32px;
//       top: 32px;
//     }
//     62.5% {
//       left: 32px;
//       top: 64px;
//     }
//     73% {
//       left: 32px;
//       top: 64px;
//     }
//     75% {
//       left: 0;
//       top: 64px;
//     }
//     85.5% {
//       left: 0;
//       top: 64px;
//     }
//     87.5% {
//       left: 0;
//       top: 32px;
//     }
//     98% {
//       left: 0;
//       top: 32px;
//     }
//     100% {
//       left: 0;
//       top: 0;
//     }
//   }

//   .loader {
//     position: relative;
//     width: 96px;
//     height: 96px;
//     transform: rotate(45deg);
//   }

//   .loader-square {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 28px;
//     height: 28px;
//     margin: 2px;
//     border-radius: 0px;
//     background: #ff69b4; /* Pink color */
//     background-size: cover;
//     background-position: center;
//     background-attachment: fixed;
//     animation: square-animation 10s ease-in-out infinite both;
//   }

//   .loader-square:nth-of-type(0) {
//     animation-delay: 0s;
//   }

//   .loader-square:nth-of-type(1) {
//     animation-delay: -1.4285714286s;
//   }

//   .loader-square:nth-of-type(2) {
//     animation-delay: -2.8571428571s;
//   }

//   .loader-square:nth-of-type(3) {
//     animation-delay: -4.2857142857s;
//   }

//   .loader-square:nth-of-type(4) {
//     animation-delay: -5.7142857143s;
//   }

//   .loader-square:nth-of-type(5) {
//     animation-delay: -7.1428571429s;
//   }

//   .loader-square:nth-of-type(6) {
//     animation-delay: -8.5714285714s;
//   }

//   .loader-square:nth-of-type(7) {
//     animation-delay: -10s;
//   }

//   .loader-text {
//     font-size: 1.25rem; /* Equivalent to 'xl' in tailwind */
//     color: #4a5568; /* gray-700 */
//     margin-top: 20px;
//     text-align: center;
//   }
// `;

// export default Loader;
