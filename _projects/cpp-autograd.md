---
layout: page
title: "Autograd engine in pure C++"
description: "A small reverse-mode automatic differentiation and neural-network framework built from scratch."
importance: 6
category: systems
---

I built a small neural-network framework in C++ to make backpropagation less abstract. The core is a reverse-mode automatic differentiation engine with dynamic computational graph construction: operations create nodes, nodes remember their parents, and `backward()` walks a topological ordering in reverse to accumulate gradients through arbitrary DAGs.

Underneath it is a basic linear-algebra layer for matrix/vector operations and memory management. On top of it is an MLP implementation with activations, mean-squared error, SGD, and training loops. The project is intentionally not a replacement for PyTorch or BLAS; it is a way to make the mechanics visible: tensor shapes, graph ownership, local derivatives, gradient accumulation, and the gap between a correct implementation and a fast one.

The most useful part was writing the derivatives for matrix operations by hand. It forced all the annoying details into the open: transposes in matmul gradients, broadcasting assumptions, lifetime management, and why high-level autograd systems hide so much complexity.

**Tools:** C++, reverse-mode autodiff, dynamic computational graphs, linear algebra, MLPs, backpropagation, SGD.
