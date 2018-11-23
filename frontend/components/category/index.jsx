import React from 'react';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as CategoryApiUtil from '../../utils/category_api_util';

import CategoryShow from './show';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    CategoryApiUtil.fetchCategories().then(
      data => {
        this.setState({ categories: data });
      }
    )
  }

  setContent = (contentType, contentMethod, contentId) => {
    this.props.setContent(contentType, contentMethod, contentId)
  }

  render() {
    let globalContext = this.context;
    const { categories } = this.state;
    let categoriesTabs;
    let categoriesContent;

    categoriesTabs = (
      categories.map(category => (
        <li role="presentation" className="" key={category.id}>
          <a
            href={`#category-${category.id}`}
            aria-controls={`category-${category.id}`}
            role="tab"
            data-toggle="tab"
          >
            {category.name}
          </a>
        </li>
      ))
    )

    categoriesContent = (
      categories.map(
        category => (
          <CategoryShow
            key={category.id}
            category={category}
            setContent={this.setContent}
          />
        )
      )
    )

    return (
      <div className="content__middle">
        <div className="category">
          <div className="category__navigation">
            <ul className="nav nav-tabs" role="tablist">
              {categoriesTabs}
            </ul>
          </div>
          <div className="category__content">
            <div className="tab-content">
              {categoriesContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CategoryIndex.contextType = AppContext;
export default CategoryIndex;
