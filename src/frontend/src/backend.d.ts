import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    title: string;
    content: string;
}
export interface backendInterface {
    adoptTree(treeId: string): Promise<void>;
    createEvent(id: string, name: string, location: string, date: string): Promise<void>;
    getBlogPost(title: string): Promise<BlogPost>;
    getUserEvents(): Promise<Array<string>>;
    signUpForEvent(eventId: string): Promise<void>;
}
