<template>
    <div class="card">
        <div class="card__product-img">
            <img class="card__img" alt="product-image" :src="img" width="600" height="300">
        </div>
        <div class="card__content">
            <p class="card__name">{{ name }} <span v-if="id">#{{ id }}</span></p>
            <p class="card__description" v-if="plot">{{ plot }}</p>
            <div class="card__content-bottom">
                <div class="card__rating">
                    <p>{{ imdbRating }} IMDB</p>
                </div>
                <div v-if="time" class="card__time">
                    <div class="icon">
                        <img src="@/assets/icon-clock.svg" alt="">
                    </div>
                    <p>{{ time }}</p>
                </div>
            </div>
        </div>
        <div class="card__footer">
            <p class="card__autor">Creation of <span class="card__autor--alt-color">{{ autor }}</span></p>
        </div>
        <button class="btn btn-delete" @click="onDelete">
            <span class="mdi mdi-delete mdi-24px"></span>
            <span class="mdi mdi-delete-empty mdi-24px"></span>
            <span>Delete</span>
        </button>
    </div>
</template>

<script>
export default {
    emits: ["deleteMovie"],
    props: {
        img: {
            type: String,
            default: '',
            required: true
        },
        name: {
            type: String,
            default: '',
            required: true
        },
        plot: {
            type: String,
            default: ''
        },
        id: {
            type: [String, Number],
            default: null
        },
        imdbRating: {
            type: String,
            default: 0,
            required: true
        },
        time: {
            type: [String, Number],
            default: ''
        },
        autor: {
            type: String,
            default: ''
        }
    },
    methods: {
        onDelete() {
            this.$emit("deleteMovie", { index: this.id })
        }
    }
}
</script>

<style scoped lang="scss">
$delete-red: red;

body {
    margin: 32px;
}

.btn {
    display: flex;
    align-items: center;
    background: none;
    border: 1px solid lighten(gray, 24%);
    height: 48px;
    padding: 0 24px 0 16px;
    letter-spacing: .25px;
    border-radius: 24px;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    .mdi {
        margin-right: 8px;
    }
}

.btn-delete {
    font-size: 16px;
    color: red;

    >.mdi-delete-empty {
        display: none;
    }

    &:hover {
        background-color: lighten(red, 48%);

        >.mdi-delete-empty {
            display: block;
        }

        >.mdi-delete {
            display: none;
        }
    }



    &:focus {
        box-shadow: 0 0 0 4px lighten(red, 40%);
    }
}

.icon {
    display: flex;
}

.card {
    background-color: #15263F;
    color: #8BACD9;
    border-radius: 16px;
    padding: 24px;
    width: 600px;
    font-size: 1.5rem;
    box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        font-size: 1.6rem;
        width: 600px;
        padding-bottom: 32px;
    }

    .card__product-img {
        cursor: pointer;
        position: relative;
        border-radius: 8px;
        overflow: hidden;

        @mixin hoverOpacity {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.25s ease-out;
        }

        &:hover {
            &::after {
                opacity: 1;
            }
        }
    }

    .card__content {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 24px 0 16px 0;

        @media screen and (min-width: 768px) {
            gap: 16px;
            padding: 24px 0;
        }

        .card__name {
            color: white;
            font-size: 2.2rem;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                color: #00FFF8;
            }
        }

        .card__description {
            font-size: 1.8rem;
            line-height: 2.6rem;
            font-weight: lighter;
        }

        .card__content-bottom {
            display: flex;
            justify-content: space-between;
            padding-top: 4px;

            @media screen and (min-width: 768px) {
                padding-top: 6px;
            }

            >* {
                display: flex;
                align-items: center;
                gap: 8px;
                font-weight: 600;
            }

            .card__rating {
                color: #00FFF8;
            }
        }
    }

    .card__footer {
        display: flex;
        align-items: center;
        border-top: 1px solid #2E405A;
        gap: 16px;
        padding-top: 16px;

        .card__autor--alt-color {
            color: white;
        }
    }
}

//Transition
.fade-enter-active,
.fade-leave-active {
    transition: 0.25s ease-out;
}

.fade-leave-to,
.fade-enter-from {
    opacity: 0;
}
</style>
