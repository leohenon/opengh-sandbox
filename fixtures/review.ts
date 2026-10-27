export interface Fixture {
  name: string;
  enabled: boolean;
}

export function describeFixture(fixture: Fixture): string {
  return `${fixture.name}: ${fixture.enabled ? "enabled" : "disabled"}`;
}
