<template>
  <section>
    <b-table :data="data" :loading="isLoading" :mobile-cards="true">

      <b-table-column field="english" label="English" v-slot="props">
        {{ props.row.english }}
      </b-table-column>

      <b-table-column field="russian" label="Russian" v-slot="props">
        {{ props.row.russian }}
      </b-table-column>

      <b-table-column field="author" label="Author" v-slot="props">
          {{props.row.author}}
      </b-table-column>

      <b-table-column label="Gender" v-slot="props">
        <span>
          <b-icon pack="fas" icon="user">
          </b-icon>
          {{ props.row.gender }}
        </span>
      </b-table-column>

    </b-table>
  </section>
</template>

<script>
export default {
  name: 'Words',
  data() {
    const data = [
      {
        id: 1,
        english: 'Jesse',
        russian: 'Simmons',
        date: '2016/10/15 13:43:27',
        gender: 'Male'
      },
      {
        id: 2,
        english: 'John',
        russian: 'Jacobs',
        date: '2016/12/15 06:00:53',
        gender: 'Male'
      },
      {
        id: 3,
        english: 'Tina',
        russian: 'Gilbert',
        date: '2016/04/26 06:26:28',
        gender: 'Female'
      },
      {
        id: 4,
        english: 'Clarence',
        russian: 'Flores',
        date: '2016/04/10 10:28:46',
        gender: 'Male'
      },
      {
        id: 5,
        english: 'Anne',
        russian: 'Lee',
        date: '2016/12/06 14:38:38',
        gender: 'Female'
      }
    ]

    return {
      data,
      isLoading: false
    }
  }
}
</script>