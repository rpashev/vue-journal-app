<template>
  <div class="card" @click="openJournal">
    <div class="card__side front">
      <div class="img"></div>
      <h2>
        <span class="title-span">{{ journalName }}</span>
      </h2>
      <p class="entries-number">
        You have <span>{{ entriesAmount }}</span> entries in this journal.
      </p>
    </div>
    <div class="card__side back">
      <div class="actions">
        <base-button mode="light" link :to="`/journals/${journalID}/new-entry`" @click.stop
          >New Entry</base-button
        >
        <base-button link :to="`/journals/${journalID}`" @click.stop>View Entries</base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps(["journalName", "journalID", "entriesAmount"]);

const router = useRouter();

const openJournal = () => {
  router.push(`/journals/${props.journalID}`);
};
</script>

<style scoped>
.card {
  height: 26rem;
  max-width: 310px;
  min-width: 310px;
  align-items: center;
  cursor: pointer;
  perspective: 1500px;
  position: relative;
}

.card__side {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.8s ease;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}

.card:hover .front {
  transform: rotateY(-180deg);
}
.card:hover .back {
  transform: rotateY(0);
}

.img {
  background: linear-gradient(rgba(59, 130, 246, 0.1), rgba(47, 57, 64, 0.1)),
    url("../../assets/images/reflective.jpg") top 30% center / cover no-repeat;
  width: 100%;
  height: 13rem;
  clip-path: polygon(0 0, 100% 0, 100% 84%, 0 100%);
}

.back {
  background: linear-gradient(var(--color-blue), var(--color-gray-darker));
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.actions a {
  text-align: center;
  width: 12rem;
  padding: 0.4rem;
  font-size: 1.2rem;
}

h2 {
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  color: var(--color-gray-light);
  position: absolute;
  top: 7rem;
  right: 2rem;
  font-size: 1.6rem;
  width: 70%;
}

.title-span {
  background-image: linear-gradient(rgba(59, 130, 246, 0.9), rgba(85, 122, 148, 0.9));
  padding: 0.4rem 0.6rem;
  box-decoration-break: clone;
}

.entries-number {
  text-align: center;
  opacity: 0.8;
  margin: 5rem auto 0 auto;
  max-width: 10rem;
}

.entries-number span {
  font-weight: bold;
}

@media (hover: none), (max-width: 56.25em) {
  .card {
    height: auto;
    background: linear-gradient(var(--color-blue), var(--color-gray-darker));
    padding-bottom: 1.5rem;
    border-radius: 4px;
  }
  .card:hover {
    transform: none;
  }
  .card__side {
    position: static;
    height: auto;
    transform: rotateY(0);
    box-shadow: none;
    background: none;
  }
  .entries-number {
    color: var(--color-gray-light);
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  h2 {
    top: 6.5rem;
  }
}
</style>
