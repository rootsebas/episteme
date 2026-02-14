export type Difficulty = "beginner" | "intermediate" | "advanced";

export type Topic =
  | "node"
  | "react"
  | "typescript"
  | "postgresql"
  | "sql"
  | "architecture"
  | "solid"
  | "devops";

export interface HealthResponseDto {
  status: "ok";
  service: string;
  timestamp: string; // ISO
  version?: string;
}
