export const defaultItemOptions = element => {
  switch (element) {
    case 'Dropdown':
      return [
        { value: '', text: '', key: `dropdown_option_${1}` },
        { value: '', text: '', key: `dropdown_option_${1}` },
        { value: '', text: '', key: `dropdown_option_${1}` }
      ];
    case 'Tags':
      return [
        {
          value: 'place_holder_tag_1',
          text: 'Place holder tag 1',
          key: `tags_option_'${1}`
        },
        {
          value: 'place_holder_tag_2',
          text: 'Place holder tag 2',
          key: `tags_option_'${1}`
        },
        {
          value: 'place_holder_tag_3',
          text: 'Place holder tag 3',
          key: `tags_option_'${1}`
        }
      ];
    case 'Checkboxes':
      return [
        {
          value: 'place_holder_option_1',
          text: 'Place holder option 1',
          key: `checkboxes_option_'${1}`
        },
        {
          value: 'place_holder_option_2',
          text: 'Place holder option 2',
          key: `checkboxes_option_'${1}`
        },
        {
          value: 'place_holder_option_3',
          text: 'Place holder option 3',
          key: `checkboxes_option_'${1}`
        }
      ];
    case 'RadioButtons':
      return [
        {
          value: 'place_holder_option_1',
          text: 'Place holder option 1',
          key: `radiobuttons_option_${1}`
        },
        {
          value: 'place_holder_option_2',
          text: 'Place holder option 2',
          key: `radiobuttons_option_${1}`
        },
        {
          value: 'place_holder_option_3',
          text: 'Place holder option 3',
          key: `radiobuttons_option_${1}`
        }
      ];
    default:
      return [];
  }
};

export const getCommomStyles = () => ({
  color: 'black',
  fontSize: '12px',
  fontWeight: '300',
  height: '25px',
  width: '100%',
  borderStyle: 'none',
  borderRadius: 0,
  borderWidth: 0,
  borderColor: 'black',
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  paddingTop: '0px',
  paddingRight: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px'
});

export const defaultItems = () => [
  {
    key: 'HBox',
    name: 'H Box',
    icon: 'fa fa-object-group',
    static: true,
    children: [],
    isHBox: true,
    styles: {
      height: '40px',
      color: 'black',
      fontSize: '14px',
      borderStyle: 'solid',
      borderWidth: '0.5px',
      borderColor: 'lightgrey',
      borderRadius: '4px',
      paddingTop: '10px',
      paddingRight: '10px',
      paddingBottom: '10px',
      paddingLeft: '10px',
      marginBottom: '5px'
    }
  },
  {
    key: 'Header',
    name: 'Header Text',
    icon: 'fa fa-header',
    static: true,
    text: 'Placeholder Text...',
    styles: {
      color: 'grey',
      fontSize: '20px'
    }
  },
  {
    key: 'Label',
    name: 'Label',
    static: true,
    icon: 'fa fa-font',
    text: 'This is a demo Label',
    styles: {
      color: 'grey',
      fontSize: '15px'
    }
  },
  {
    key: 'Paragraph',
    name: 'Paragraph',
    static: true,
    icon: 'fa fa-paragraph',
    text: 'Placeholder Text...',
    disabled: true
  },
  {
    key: 'LineBreak',
    name: 'Line Break',
    static: true,
    icon: 'fa fa-arrows-h',
    disabled: true
  },
  {
    key: 'Dropdown',
    canHaveAnswer: true,
    name: 'Dropdown',
    icon: 'fa fa-caret-square-o-down',
    label: 'Placeholder Label',
    field_name: 'dropdown_',
    options: [],
    disabled: true
  },
  {
    key: 'Tags',
    canHaveAnswer: true,
    name: 'Tags',
    icon: 'fa fa-tags',
    label: 'Placeholder Label',
    field_name: 'tags_',
    options: [],
    disabled: true
  },
  {
    key: 'Checkboxes',
    canHaveAnswer: true,
    name: 'Checkboxes',
    icon: 'fa fa-check-square-o',
    label: 'Placeholder Label',
    field_name: 'checkboxes_',
    options: [],
    disabled: true
  },
  {
    key: 'RadioButtons',
    canHaveAnswer: true,
    name: 'Multiple Choice',
    icon: 'fa fa-dot-circle-o',
    label: 'Placeholder Label',
    field_name: 'radio_buttons_',
    options: [],
    disabled: true
  },
  {
    key: 'TextInput',
    canHaveAnswer: true,
    name: 'Text Input',
    label: 'Placeholder Label',
    icon: 'fa fa-font',
    field_name: 'text_input_',
    disabled: true
  },
  {
    key: 'NumberInput',
    canHaveAnswer: true,
    name: 'Number Input',
    label: 'Placeholder Label',
    icon: 'fa fa-plus',
    field_name: 'number_input_',
    disabled: true
  },
  {
    key: 'TextArea',
    canHaveAnswer: true,
    name: 'Multi-line Input',
    label: 'Placeholder Label',
    icon: 'fa fa-text-height',
    field_name: 'text_area_',
    disabled: true
  },
  {
    key: 'Image',
    name: 'Image',
    label: '',
    icon: 'fa fa-photo',
    field_name: 'image_',
    src: '',
    disabled: true
  },
  {
    key: 'Rating',
    canHaveAnswer: true,
    name: 'Rating',
    label: 'Placeholder Label',
    icon: 'fa fa-star',
    field_name: 'rating_',
    disabled: true
  },
  {
    key: 'DatePicker',
    canDefaultToday: true,
    canReadOnly: true,
    name: 'Date',
    icon: 'fa fa-calendar',
    label: 'Placeholder Label',
    field_name: 'date_picker_',
    disabled: true
  },
  {
    key: 'Signature',
    canReadOnly: true,
    name: 'Signature',
    icon: 'fa fa-pencil-square-o',
    label: 'Signature',
    field_name: 'signature_',
    disabled: true
  },
  {
    key: 'HyperLink',
    name: 'Web site',
    icon: 'fa fa-link',
    static: true,
    text: 'Placeholder Web site link ...',
    href: 'http://www.example.com',
    disabled: true
  },
  {
    key: 'Download',
    name: 'File Attachment',
    icon: 'fa fa-file',
    static: true,
    text: 'Placeholder file name ...',
    field_name: 'download_',
    file_path: '',
    _href: '',
    disabled: true
  },
  {
    key: 'Range',
    name: 'Range',
    icon: 'fa fa-sliders',
    label: 'Placeholder Label',
    field_name: 'range_',
    step: 1,
    default_value: 3,
    min_value: 1,
    max_value: 5,
    min_label: 'Easy',
    max_label: 'Difficult',
    disabled: true
  }
];
