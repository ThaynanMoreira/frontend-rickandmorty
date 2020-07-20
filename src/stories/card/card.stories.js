
import Card from '../../components/Common/DataSetCard.vue'
// import { storiesOf } from '@storybook/vue'

export default {
  component: Card,
  title: 'DataSetCard'
}

export const withText = () => ({
  components: { Card },
  template: '<Card :item="item" />',
  data: () => ({
    item: {
      color: '#1F7087',
      src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
      title: 'Supermodel',
      subtitle: 'Foster the People',
    }
  })
})


// storiesOf('DataSetCard', Card).add('default', withText);

