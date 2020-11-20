import React, { Component } from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./item";
import image1 from './images/awslogo.png'
import BorderWrapper from 'react-border-wrapper'

const Content = () => {
    return (
      <BorderWrapper>
        <div className="QuickSkill">
          <Carousel itemsToShow={4}>
            <Item>
            <img src={image1} className="sliderimg"/>
            </Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
            <Item>10</Item>
            <Item>11</Item>
            <Item>12</Item>
          </Carousel>
        </div>
      </BorderWrapper>
  )
}

export default Content;