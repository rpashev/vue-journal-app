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
        <base-button mode="dark" link :to="`/journals/${journalID}`" @click.stop
          >View Entries</base-button
        >
        <base-button link :to="`/journals/${journalID}/new-entry`" @click.stop
          >New Entry</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["journalName", "journalID", "entriesAmount"],
  setup(props) {
    const router = useRouter();

    const openJournal = () => {
      router.push(`/journals/${props.journalID}`);
    };

    return {
      openJournal,
    };
  },
};
</script>

<style scoped>
.card {
  height: 26rem;
  max-width: 300px;
  min-width: 300px;
  align-items: center;
  cursor: pointer;
  perspective: 1500px;
  position: relative;
}

.card__side {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
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
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.back {
  background: linear-gradient(#3b82f6, #2f3940);
  transform: rotateY(180deg);
}

.actions {
  display: flex;
  justify-content: space-between;
}

.actions a {
  width: 45%;
  text-align: center;
  padding: 0.4rem;
  font-size: 0.9rem;
}

h2 {
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  color: #f0f0f0;
  position: absolute;
  top: 7rem;
  right: 2rem;
  font-size: 1.6rem;
  width: 75%;
}

.title-span {
  background-image: linear-gradient(
    rgba(59, 130, 246, 0.9),
    rgba(85, 122, 148, 0.9)
  );
  padding: 0.4rem 0.6rem;
  box-decoration-break: clone;
}

.entries-number {
  text-align: center;
  opacity: 0.8;
  margin: 4.5rem auto 0 auto;
  max-width: 10rem;
}

.entries-number span {
  font-weight: bold;
}
</style>
