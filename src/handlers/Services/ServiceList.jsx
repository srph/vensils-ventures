import React from 'react';
import ServiceItem from './ServiceItem';

export default class ServiceList extends React.Component {
  render() {
    return (
      <div className="services__list">
        <ServiceItem title={'Photo Booth'} thumbnail="/img/ph.jpg">Make wonderful, memorable photos within a click!</ServiceItem>
        <ServiceItem title={'Photo Booth'} thumbnail="/img/ph.jpg">Make wonderful, memorable photos within a click!</ServiceItem>
        <ServiceItem title={'Photo Booth'} thumbnail="/img/ph.jpg">Make wonderful, memorable photos within a click!</ServiceItem>
      </div>
    );
  }
}
