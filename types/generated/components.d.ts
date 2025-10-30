import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_banner_sections';
  info: {
    description: 'Page banner supporting image, video, or external link with optional button.';
    displayName: 'Banner Section';
    icon: 'landscape';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    backgroundImage: Schema.Attribute.Media;
    backgroundVideo: Schema.Attribute.Media;
    cta: Schema.Attribute.Component<'shared.link', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    mediaType: Schema.Attribute.Enumeration<
      ['image', 'video', 'external_video']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image'>;
    overlayColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#00000080'>;
    subheading: Schema.Attribute.Text;
    videoUrl: Schema.Attribute.String;
  };
}

export interface LayoutCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_cta_blocks';
  info: {
    displayName: 'CTA Block';
    icon: 'megaphone';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media;
    button: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_feature_grids';
  info: {
    displayName: 'Feature Grid';
    icon: 'grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.card-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutImageText extends Struct.ComponentSchema {
  collectionName: 'components_layout_image_texts';
  info: {
    displayName: 'Image + Text';
    icon: 'alignLeft';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface LayoutIntelligenceGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_intelligence_grids';
  info: {
    displayName: 'Intelligence Grid';
    icon: 'blocks';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutJoinUs extends Struct.ComponentSchema {
  collectionName: 'components_layout_join_us';
  info: {
    displayName: 'Join Us';
    icon: 'briefcase';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface LayoutMeetAna extends Struct.ComponentSchema {
  collectionName: 'components_layout_meet_ana';
  info: {
    displayName: 'Meet Ana';
    icon: 'user';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media;
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutNewsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_layout_news_carousels';
  info: {
    displayName: 'News Carousel';
    icon: 'carousel';
  };
  attributes: {
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<6>;
    mode: Schema.Attribute.Enumeration<['latest', 'manual']> &
      Schema.Attribute.DefaultTo<'latest'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutTestimonialSlider extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonial_sliders';
  info: {
    displayName: 'Testimonial Slider';
    icon: 'quote';
  };
  attributes: {
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<6>;
    mode: Schema.Attribute.Enumeration<['latest', 'manual']> &
      Schema.Attribute.DefaultTo<'latest'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutValueGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_value_grids';
  info: {
    displayName: 'Value Grid';
    icon: 'checkbox';
  };
  attributes: {
    heading: Schema.Attribute.String;
    values: Schema.Attribute.Component<'shared.value-item', true>;
  };
}

export interface SharedCardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_items';
  info: {
    displayName: 'Card Item';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_groups';
  info: {
    displayName: 'Link Group';
    icon: 'layer';
  };
  attributes: {
    groupTitle: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'Stat Item';
    icon: 'number';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedValueItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_value_items';
  info: {
    displayName: 'Value Item';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.banner-section': LayoutBannerSection;
      'layout.cta-block': LayoutCtaBlock;
      'layout.feature-grid': LayoutFeatureGrid;
      'layout.image-text': LayoutImageText;
      'layout.intelligence-grid': LayoutIntelligenceGrid;
      'layout.join-us': LayoutJoinUs;
      'layout.meet-ana': LayoutMeetAna;
      'layout.news-carousel': LayoutNewsCarousel;
      'layout.testimonial-slider': LayoutTestimonialSlider;
      'layout.value-grid': LayoutValueGrid;
      'shared.card-item': SharedCardItem;
      'shared.link': SharedLink;
      'shared.link-group': SharedLinkGroup;
      'shared.seo': SharedSeo;
      'shared.stat-item': SharedStatItem;
      'shared.value-item': SharedValueItem;
    }
  }
}
