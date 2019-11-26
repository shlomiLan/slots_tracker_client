// Import Vue and the component being tested
// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';
import moxios from 'moxios';

// Utilities
import {
  mount,
  createLocalVue,
} from '@vue/test-utils';

// Components
import Expenses from '../../src/components/Alert.vue';


const localVue = createLocalVue();


// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MyComponent', () => {
  let vuetify;

  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install();
    vuetify = new Vuetify()
  });

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Expenses.created).toBe('function');
  });

  // Inspect initial expenses is empty
  it('correctly sets the message when created', () => {
    const wrapper = mount(Expenses, {
      localVue,
      vuetify,
      propsData: {
        title: 'Foobar',
      },
    });

    // expect(wrapper.expenses).toEqual(expect.arrayContaining([]));
  });
});


// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
//
// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })



// test/CustomCard.spec.js


// describe('CustomCard.vue', () => {
//   it('should have a custom title and match snapshot', () => {
//     const wrapper = mount(CustomCard, {
//       localVue,
//       vuetify,
//       propsData: {
//         title: 'Foobar',
//       },
//     })
//
//     // With jest we can create snapshot files of the HTML output
//     expect(wrapper.html()).toMatchSnapshot()
//
//     // We could also verify this differently
//     // by checking the text content
//     const title = wrapper.find('.v-card__title > span')
//
//     expect(title.text()).toBe('Foobar')
//   })
// })
