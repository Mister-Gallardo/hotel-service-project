/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';

function Loading() {
  return (
    <div className='loading'>
      <img
        src='/images/gif/loading-arrow.gif'
        alt='loading gif'
      />
      <h4>Data loading...</h4>
    </div>
  );
}

export default Loading;
