import Vue from 'vue'
import { isDate, format, parseISO } from 'date-fns'

Vue.filter('formatNumber', (number, digits = 3) => new Intl.NumberFormat('en-US', { maximumSignificantDigits: digits }).format(number))
Vue.filter('date', (value, fmt = 'dd/MM') => format(isDate(value) ? value : parseISO(value), fmt))
