<template>
  <main class="app">
    <h2 className="h2-design">
      Welcome to the counter page... <br />
      Check out the Counter!
    </h2>
    <div class="counter">
      <input type="text" placeholder="Set counter value" v-model="value" />
      <button class="set-value" @click="setValue">Set Value</button>
      <h2>COUNTER: {{ count }}</h2>
      <div class="btn-wrapper">
        <button class="decrement" @click="decrement">Decrement</button>
        <button class="increment" @click="increment">Increment</button>
        <button class="reset" @click="reset">Reset</button>
      </div>
    </div>
  </main>
</template>

<script>
import useCounter from "../composables/useCounter";
export default {
  name: "Counter",
  setup() {
    const { increment, decrement, reset, setValue, count, value } =
      useCounter();

    return {
      increment,
      decrement,
      reset,
      setValue,
      count,
      value,
    };
  },
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
}

.h2-design {
  background-color: #087099;
  color: white;
  text-align: center;
  width: 100%;
}

.increment {
  background-color: rgb(89, 168, 89);
  color: white;
  padding: 10px;
  border: none;
  width: 100px;
  height: 40px;
  margin: 0 10px;
  font-size: 17px;
  border-radius: 5px;
}

.decrement {
  background-color: rgb(207, 91, 91);
  color: white;
  padding: 10px;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 17px;
  border-radius: 5px;
}

.reset {
  background-color: rgb(67, 48, 151);
  color: white;
  padding: 10px;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 17px;
  border-radius: 5px;
}

.set-value {
  background-color: rgb(48, 151, 129);
  color: white;
  padding: 10px;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 17px;
  border-radius: 5px;
  margin-top: 10px;
}

.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* border: 1px solid red; */
  width: 40%;
}

.counter input {
  padding: 20px;
  width: 70%;
  height: 5px;
}

.btn-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  font-size: 20px;
}

.decrement:hover {
  background: rgba(196, 66, 66, 0.9);
  cursor: pointer;
}

.increment:hover {
  background: rgba(63, 168, 63, 0.9);
  cursor: pointer;
}

.reset:hover {
  background: rgba(59, 32, 156, 0.9);
  cursor: pointer;
}

.set-value:hover {
  background-color: rgba(53, 121, 106, 0.9);
  cursor: pointer;
}
</style>
