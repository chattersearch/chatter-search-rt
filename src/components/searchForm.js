/**
 * @module components/searchForm
 * @description Search form with bird, magnifier and things
 */

import React from 'react'
import classNames from 'classnames'

const SearchForm = ({onSubmit, onReset, onClickReset, isFetching, isFormExpanded}) => {
  var formClasses = classNames({
    'search-bar': true,
    'expanded': isFormExpanded
  })
  var birdClasses = classNames({
    'twitter': true,
    'loading': isFetching
  })
  return (
    <div id='search-form'>
      <div className='container'>
        <div className={birdClasses}></div>
      </div>
      <form onReset={onReset} onSubmit={onSubmit} className={formClasses} autocomplete='off'>
        <input type='text' name='screen_name' className='input' autoComplete='off' />
        <button onClick={onClickReset} type='reset' className='search'></button>
      </form>
    </div>
  )
}

export default SearchForm
