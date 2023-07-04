// Undirected Graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      console.log('Vertex already exists');
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        let adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    } else {
      console.log('Vertex does not exists');
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((x) => x !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((x) => x !== v1);
  }

  print() {
    console.log(this.adjacencyList);
  }
}

let graph = new Graph();

graph.addVertex('Dallas');
graph.addVertex('Tokyo');
graph.addVertex('Aspen');
graph.addVertex('Los Angeles');
graph.addVertex('Hong Kong');
graph.print();

graph.addEdge('Dallas', 'Tokyo');
graph.addEdge('Dallas', 'Aspen');
graph.addEdge('Hong Kong', 'Tokyo');
graph.addEdge('Hong Kong', 'Dallas');
graph.addEdge('Los Angeles', 'Hong Kong');
graph.addEdge('Los Angeles', 'Aspen');
graph.print();

graph.removeEdge('Dallas', 'Aspen');
graph.print();
graph.removeEdge('Dallas', 'Tokyo');
graph.print();

graph.removeVertex('Hong Kong');
graph.print();
