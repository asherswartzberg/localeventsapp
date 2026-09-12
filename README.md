# Description

## 1. Need, Persona, Capability, and Fundamental Value

Need:
People who are new to an area want to meet people and get involved in the community, but they don't know where to find local events or which ones would be good opportunities to connect.

Persona:
Someone who has recently moved to or is temporarily visiting a new city, doesn't have an established social network there, and wants to meet people or participate in local activities.

Capability:
Find local events and gatherings that are happening in a chosen city.

Fundamental Value:
Connection. People can quickly discover opportunities to meet others and become part of their new community.

## 2. Three Screens

Screen 1 — Landing / Choose a City

Main job: Communicate the app's core value and allow the user to select the city they want to explore.

The screen should prominently communicate the idea of finding people and community through local events. Include a simple calendar or event-related graphic.

Why this screen earned a slot:
Users need to understand the app's purpose and choose a community before they can discover relevant events.

Design question:
Does the user immediately understand that the app can help them connect with a community in a new city?

Screen 2 — Event Discovery

Main job: Allow users to browse local events and quickly identify events that interest them.

Display a list of events ordered by date. Include simple filtering options that allow users to filter events by type and/or date.

Why this screen earned a slot:
This screen demonstrates the app's primary capability: helping someone discover opportunities to participate in their new community.

Design question:
Can users quickly understand what events are available and identify an event that seems like a good opportunity for them?

Screen 3 — Event Details

Main job: Give the user enough information about a selected event to decide whether they want to attend.

The page should make the event feel like a concrete opportunity for the user to participate rather than simply providing a block of information.

Why this screen earned a slot:
Once a user discovers an event, they need enough information to feel comfortable considering participation.

Design question:
Does the event information give the user enough confidence to consider attending?

## 3. Design Question Plan

Need Question:
“When you’re looking for something to do in a new place, what do you usually use right now, and what is frustrating about it?”

Prediction:
They will likely mention that information is spread across different websites, social media pages, or event platforms, making it difficult to know what is actually happening nearby.

Prototype connection:
This prediction is based on the event discovery screen, where events are collected into one list and can be filtered by date or type.

Value Question:
“If you could easily find events where you could meet people and get involved in a new city, what would that be worth to you? What one or two words would describe that benefit?”

Prediction:
I predict they will use words such as “connection,” “community,” “belonging,” or “convenience.” They may value having an easier way to meet people without already knowing someone in the area.

Prototype connection:
This prediction is based on the overall purpose of the prototype and especially the landing screen's emphasis on finding people and becoming part of a community.

Persona Question:
“How often do you find yourself looking for things to do or people to meet when you’re in a new city?”

Prediction:
I predict that someone who fits the target persona will say this happens whenever they move somewhere new or visit a city where they don't already have a social network.

Prototype connection:
This prediction is based on the prototype being designed specifically for people who are new to an area and want opportunities to become involved.

Capability Question:
“Take a look at this screen for a few seconds. Without clicking anything, what do you think this product is supposed to help you do?”

Prediction:
They will probably say that it helps them find local events or activities in a particular city. Ideally, they will also recognize that the purpose is to help them meet people or connect with the community.

Prototype connection:
This directly tests the landing screen, whose primary job is to communicate the app's capability and fundamental value as quickly as possible.

## 4. Design Justification and First Read

The landing screen signals the primary capability and fundamental value at first glance through the title on the page. Every element on the landing page earns its place by either signaling the capability or by providing a function to support that capability. The main principle throughout the prototype is proximity; information and actions that serve the same purpose are placed close together. Similarity is especially useful on Screen 2 because the repeated event cards allow users to quickly recognize each event as a separate but similarly structured item. Screens 2 and 3 stay on mission and from each, you can click the home button in the top right to return to the landing page. The AI initially did not do a good job at signaling the primary capability on the landing screen, there was a lot of unnecessary information that could distract the user from what is most important. I changed it by getting rid of the unnecessary elements on the page. The design question that guided my changes was the capability question because the initial prototype had too much information that would distract from the fundamental value and capability.

The AI added subtitles and icons that took focus away from the main title which points towards the primary capibility.

Before: (This was the only screenshot I could get from the first build and it does not show all the elements that distract from the title.)
<img width="960" height="537" alt="image" src="https://github.com/user-attachments/assets/75aba51d-d32f-42d9-8f91-7c5f65377c97" />

After:
<img width="960" height="537" alt="image" src="https://github.com/user-attachments/assets/7a97632e-f7e4-422a-b7ee-47551012e64f" />

# localeventsapp

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
