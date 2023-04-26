<template>

  <button class="button">{{ text }}</button>

</template>

<script>

export default {
  name: "MenuButton", // vue component name
  props: {
    text: {
      type: String,
      default: "Default Text"
    }

  },
  data() {}
};

</script>

<style>

.button {
  background-color: #60b13c;
  border-width: 3px;
  border-color: #1b1b32;
  border-radius: 0;
  border-style: solid;
  color: var(--color-text);
  display: block;
  margin-bottom: 1px;
  font-weight: normal;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.42857143;
  position: relative;
  left: 40%;
}

.button:active:hover, .button:focus, .button:hover {
  background-color: #1b1b32;
  border-width: 3px;
  border-color: #000;
  background-image: none;
  color: #f5f6f7;
}

</style>