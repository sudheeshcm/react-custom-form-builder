import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Popover, OverlayTrigger } from 'react-bootstrap';

import ToolbarItem from './toolbar-item';
import { addItem } from './../../actions/elementActions';
import {
  getCommomStyles,
  defaultItems,
  defaultItemOptions
} from './toolbar-item-defaults';

class Toolbar extends Component {
  static propTypes = {
    items: PropTypes.object,
    addItemToStore: PropTypes.func.isRequired
  };
  static defaultProps = {
    items: null
  };

  constructor(props) {
    super(props);

    const items = this.props.items ? this.props.items : defaultItems();

    this.state = {
      items
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.addItemOverlay.show();
    }, 1000);
    setTimeout(() => {
      this.addItemOverlay.hide();
    }, 5000);
  }

  onClick(item) {
    this.addItemOverlay.hide();

    const id = this.getRandomInt();
    const elementOptions = {
      id,
      element: item.key,
      text: item.text,
      static: item.static,
      required: false
    };

    if (item.static) {
      elementOptions.bold = false;
      elementOptions.italic = false;
    }

    if (item.canHaveAnswer) {
      elementOptions.canHaveAnswer = item.canHaveAnswer;
    }

    if (item.canReadOnly) {
      elementOptions.readOnly = false;
    }

    if (item.canDefaultToday) {
      elementOptions.defaultToday = false;
    }

    if (item.content) {
      elementOptions.content = item.content;
    }

    if (item.styles) {
      const commonStyles = getCommomStyles();
      elementOptions.styles = { ...commonStyles, ...item.styles };
    }

    if (item.href) {
      elementOptions.href = item.href;
    }

    switch (item.key) {
      case 'Image':
        elementOptions.src = item.src;
        break;
      case 'Download':
        elementOptions.href = item.href;
        elementOptions.file_path = item.file_path;
        break;
      case 'Range':
        elementOptions.step = item.step;
        elementOptions.default_value = item.default_value;
        elementOptions.min_value = item.min_value;
        elementOptions.max_value = item.max_value;
        elementOptions.min_label = item.min_label;
        elementOptions.max_label = item.max_label;
        break;
      default:
        break;
    }

    if (item.defaultValue) {
      elementOptions.defaultValue = item.defaultValue;
    }

    if (item.field_name) {
      elementOptions.field_name = item.field_name + id;
    }

    if (item.label) {
      elementOptions.label = item.label;
    }

    if (item.options) {
      elementOptions.options = defaultItemOptions(elementOptions.element);
    }

    if (item && item.key && item.key === 'HBox') {
      this.addHBox(elementOptions);
      return;
    }

    this.props.addItemToStore(elementOptions);
  }

  getRandomInt(min = 5, max = 10000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  addItemPopover = (
    <Popover
      id="add-item-popover"
      placement="right"
      positionLeft={236}
      positionTop={100}
      title="Add new Items.!"
    >
      Click on Items in Toolbox to add them to your Form.
    </Popover>
  );

  addHBox(options) {
    this.props.addItemToStore(options);
  }

  render() {
    return (
      <div className="react-formbuilder-toolbar">
        <OverlayTrigger
          ref={overlay => {
            this.addItemOverlay = overlay;
          }}
          placement="right"
          overlay={this.addItemPopover}
        >
          <h4 className="form-builder-header">Toolbox</h4>
        </OverlayTrigger>
        <ul className="tool-box">
          {this.state.items.map(item =>
            <ToolbarItem
              data={item}
              key={item.key}
              onClick={() => this.onClick(item)}
            />
          )}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItemToStore: item => {
    dispatch(addItem(item));
  }
});

export default connect(null, mapDispatchToProps)(Toolbar);
