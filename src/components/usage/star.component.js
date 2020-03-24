import React, { useLayoutEffect, useState, useEffect } from "react";
import styled from "styled-components";
import mojs from "mo-js";
import { connect } from "react-redux";

import "./star.styles.css";

const StarAnimationContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  -webkit-box-align: center;
`;

const useStarAnimation = () => {
  const [animationTimeline, setAnimationTimeline] = useState(
    () => new mojs.Timeline()
  );

  useLayoutEffect(() => {
    const tlDuration = 500;
    const scaleButton = new mojs.Html({
      el: "#star",
      duration: tlDuration,
      scale: { 1.3: 1 },
      easing: mojs.easing.ease.out
    });

    const triangleBurst = new mojs.Burst({
      parent: "#star",
      radius: { 20: 60 },
      count: 5,
      angle: 30,
      children: {
        shape: "polygon",
        radius: { 6: 0 },
        stroke: "#ff6f61",
        fill: "#ff6f61",
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.1,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration
      }
    });

    const addBurst = new mojs.Burst({
      parent: "#star",
      radius: { 20: 50 },
      angle: 80,
      duration: tlDuration,
      children: {
        shape: "circle",
        fill: "#66ff66",
        delay: 30,
        speed: 0.1,
        radius: { 4: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    });

    const countAnimation = new mojs.Html({
      el: "#count",
      opacity: { 0: 1 },
      duration: tlDuration,
      y: { 0: -30 }
    }).then({
      opacity: { 1: 0 },
      y: -80,
      delay: tlDuration / 2
    });

    const countTotalAnimation = new mojs.Html({
      el: "#countTotal",
      opacity: { 0: 1 },
      delay: (3 * tlDuration) / 2,
      duration: tlDuration,
      y: { 0: -3 }
    });

    const star = document.getElementById("star");
    star.style.transform = "scale(1,1)";
    const newAnimationTimeline = animationTimeline.add([
      scaleButton,
      countAnimation,
      countTotalAnimation,
      triangleBurst,
      addBurst
    ]);
    setAnimationTimeline(newAnimationTimeline);
  }, [animationTimeline]);
  return animationTimeline;
};

const StarAnimation = ({ currentChannel }) => {
  const MAXIMUM_USER_STAR = 100;
  const [starState, setStarState] = useState({
    count: 0,
    countTotal: 0,
    isClicked: false
  });
  const { count, countTotal, isClicked } = starState;
  const animationTimeline = useStarAnimation();

  useEffect(() => {

  }, [isClicked])

  const handleStarClick = () => {
    animationTimeline.replay();
    setStarState(prevState => ({
      isClicked: true,
      count: Math.min(count + 1, MAXIMUM_USER_STAR),
      countTotal:
        countTotal < MAXIMUM_USER_STAR
          ? prevState.countTotal + 1
          : prevState.countTotal
    }));
  };


  return (
    <StarAnimationContainer>
      <button
        id="star"
        className="star"
        onClick={() => handleStarClick()}
      >
        <StarIcon isClicked={isClicked} />
        <CountTotal countTotal={countTotal} />
        <StarCount count={count} />
      </button>
    </StarAnimationContainer>
  );
};

const StarCount = ({ count }) => {
  return (
    <span id="count" className="count">
      + {count}
    </span>
  );
};

const CountTotal = ({ countTotal }) => {
  return (
    <span id="countTotal" className="total">
      {countTotal}
    </span>
  );
};

const StarIcon = ({ isClicked }) => {
  return (
    <span>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        className={`icon ${isClicked && "checked"}`}
      >
        {" "}
        <title id="starIconTitle">Star</title>{" "}
        <polygon points="12 17.844 6.183 20.902 7.294 14.425 2.588 9.838 9.092 8.893 12 3 14.908 8.893 21.412 9.838 16.706 14.425 17.817 20.902" />{" "}
      </svg>
    </span>
  );
};

const Usage = ({ currentChannel }) => {
  return <StarAnimation currentChannel={currentChannel} />;
};

const mapStateToProps = state => ({
  currentChannel: state.channel.currentChannel
});

export default connect(mapStateToProps)(Usage);
