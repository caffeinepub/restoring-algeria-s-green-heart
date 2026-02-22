import Map "mo:core/Map";
import Set "mo:core/Set";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type Event = {
    id : Text;
    name : Text;
    location : Text;
    date : Text;
  };

  type BlogPost = {
    title : Text;
    content : Text;
  };

  let events = Map.empty<Text, Event>();
  let adoptedTrees = Set.empty<Text>();
  let userParticipations = Map.empty<Principal, Set.Set<Text>>();

  let blogPosts = Map.fromIter<Text, BlogPost>(
    [
      (
        "How to plant in arid soil",
        {
          title = "How to plant in arid soil";
          content = "Tips and strategies for successful planting in dry conditions with limited water resources.";
        },
      ),
      (
        "The Importance of Mycorrhizae in Algerian Reforestation",
        {
          title = "The Importance of Mycorrhizae in Algerian Reforestation";
          content = "Exploring the symbiotic relationship between plants and fungi, crucial for soil health.";
        },
      ),
    ].values()
  );

  public shared ({ caller }) func createEvent(id : Text, name : Text, location : Text, date : Text) : async () {
    if (events.containsKey(id)) {
      Runtime.trap("Event already exists");
    };
    let event : Event = { id; name; location; date };
    events.add(id, event);
  };

  public shared ({ caller }) func adoptTree(treeId : Text) : async () {
    if (adoptedTrees.contains(treeId)) {
      Runtime.trap("Tree already adopted");
    };
    adoptedTrees.add(treeId);
  };

  public shared ({ caller }) func signUpForEvent(eventId : Text) : async () {
    if (not events.containsKey(eventId)) {
      Runtime.trap("Event does not exist");
    };
    let userEvents = switch (userParticipations.get(caller)) {
      case (null) {
        let newSet = Set.empty<Text>();
        newSet;
      };
      case (?existingSet) { existingSet };
    };
    userEvents.add(eventId);
    userParticipations.add(caller, userEvents);
  };

  public query ({ caller }) func getUserEvents() : async [Text] {
    switch (userParticipations.get(caller)) {
      case (null) { [] };
      case (?eventSet) { eventSet.values().toArray() };
    };
  };

  public query ({ caller }) func getBlogPost(title : Text) : async BlogPost {
    switch (blogPosts.get(title)) {
      case (null) {
        Runtime.trap("Blog post not found");
      };
      case (?blogPost) { blogPost };
    };
  };
};
