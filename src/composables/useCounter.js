import { ref, reactive, toRefs } from "vue";

export default function useCounter() {
  const state = reactive({
    count: 0,
    value: "",
  });

  function increment() {
    state.count++;
  }
  function decrement() {
    state.count--;
  }
  function reset() {
    state.count = 0;
    state.value = '';
  }
  function setValue() {
    state.count = parseInt(state.value);
  }

  const refs = toRefs(state);

  return {
    increment,
    decrement,
    reset,
    setValue,
    ...refs
  };
}
