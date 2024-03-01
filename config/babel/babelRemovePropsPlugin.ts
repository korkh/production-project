import { PluginItem } from "@babel/core"; // main type for nodes, path

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) { 
        const attributesToExclude = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (attributesToExclude.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
