const article = {
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      options: {
        list: [
          { title: 'John Larson', value: 'John Larson' },
          { title: 'Kevan Lindsey', value: 'Kevan Lindsey' },
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'News' },
          { title: 'Sports', value: 'Sports' },
          { title: 'Media', value: 'Media' },
          { title: 'Columns', value: 'Columns' },
        ],
      },
    },
    {
      name: 'subCategory',
      title: 'Sub-Category',
      type: 'string',
      options: {
        list: [
          { title: 'Local News', value: 'Local News' },
          { title: 'State News', value: 'State News' },
          { title: 'National News', value: 'National News' },
          { title: 'World News', value: 'World News' },
          {
            title: 'Pro Football',
            value: 'Pro Football',
          },
          {
            title: 'Pro Baseball',
            value: 'Pro Baseball',
          },
          {
            title: 'Pro Basketball',
            value: 'Pro Basketball',
          },
          {
            title: 'Pro Soccer',
            value: 'Pro Soccer',
          },
          {
            title: 'Pro Softball',
            value: 'Pro Softball',
          },
          {
            title: 'Pro Volleyball',
            value: 'Pro Volleyball',
          },
          {
            title: 'Pro Misc Sports',
            value: 'Pro Misc Sports',
          },
          {
            title: 'College Football',
            value: 'College Football',
          },
          {
            title: 'College Baseball',
            value: 'College Baseball',
          },
          {
            title: 'College Basketball',
            value: 'College Basketball',
          },
          {
            title: 'College Soccer',
            value: 'College Soccer',
          },
          {
            title: 'College Softball',
            value: 'College Softball',
          },
          {
            title: 'College Volleyball',
            value: 'College Volleyball',
          },
          {
            title: 'College Misc Sports',
            value: 'College Misc Sports',
          },
          {
            title: 'High School Football',
            value: 'High School Football',
          },
          {
            title: 'High School Baseball',
            value: 'High School Baseball',
          },
          {
            title: 'High School Basketball',
            value: 'High School Basketball',
          },
          {
            title: 'High School Soccer',
            value: 'High School Soccer',
          },
          {
            title: 'High School Softball',
            value: 'High School Softball',
          },
          {
            title: 'High School Volleyball',
            value: 'High School Volleyball',
          },
          {
            title: 'High School Misc Sports',
            value: 'High School Misc Sports',
          },
          {
            title: 'Media: Photo Galleries',
            value: 'Media: Photo Galleries',
          },
          {
            title: 'Media: Videos',
            value: 'Media: Videos',
          },
          {
            title: 'Media: Podcasts',
            value: 'Media: Podcasts',
          },
          {
            title: 'Columns: News Commentary',
            value: 'Columns: News Commentary',
          },
          {
            title: 'Columns: Sports Commentary',
            value: 'Columns: Sports Commentary',
          },
        ],
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'excerpt',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default article;
