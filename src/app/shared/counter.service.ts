export class CounterService {
    inactiveIncrement = 0;
    activeIncrement = 0;

    logInactive() {
        console.log('Inactive :', this.inactiveIncrement++);
    }
    logActive() {
        console.log('Active :', this.activeIncrement++);
    }
}
